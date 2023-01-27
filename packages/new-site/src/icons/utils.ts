import { optimize } from "svgo";

export class IconFetcher {
  private static fetched: Map<string, string> = new Map();

  #fullName: string;
  #baseUrl: string;

  constructor(
    fullName: string,
    config: { baseApiUrl?: string } | undefined = {}
  ) {
    this.#fullName = fullName;
    this.#baseUrl = config.baseApiUrl ?? "https://api.iconify.design";
  }

  get iconName() {
    const gotten = this.#fullName.split(":")[1];
    if (gotten === undefined) {
      throw new Error(
        "Invalid icon name. Please make sure the icon name is in the format of pack:name"
      );
    }

    return gotten;
  }

  get packName() {
    const gotten = this.#fullName.split(":")[0];
    if (gotten === undefined) {
      throw new Error(
        "Invalid icon name. Please make sure the icon name is in the format of pack:name"
      );
    }

    return gotten;
  }

  async fetchIcon() {
    const cached = IconFetcher.fetched.get(this.#fullName);
    if (cached !== undefined) {
      return cached;
    }

    const content = await fetch(
      `${this.#baseUrl}/${this.packName}/${this.iconName}.svg`
    );
    const text = await content.text();

    IconFetcher.fetched.set(this.#fullName, text);

    return text;
  }
}

export class SvgOptimizer {
  constructor(private svgContent: string) {}

  optimized() {
    return optimize(this.svgContent).data;
  }
}

export class SvgParser {
  constructor(private svgContent: string) {}

  private splitAttrs(str: string) {
    const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
    let res: { [key: string]: string } = {};
    let token;
    if (str) {
      splitAttrsTokenizer.lastIndex = 0;
      str = " " + (str || "") + " ";
      while ((token = splitAttrsTokenizer.exec(str))) {
        res[token[1]!] = token[3]!;
      }
    }
    return res;
  }

  parse() {
    const domParserTokenizer =
      /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;

    domParserTokenizer.lastIndex = 0;
    let result = this.svgContent;
    let token;
    if (this.svgContent) {
      while ((token = domParserTokenizer.exec(this.svgContent))) {
        const tag = token[2];
        if (tag === "svg") {
          const attrs = this.splitAttrs(token[3]!);
          result = this.svgContent
            .slice(domParserTokenizer.lastIndex)
            .replace(/<\/svg>/gim, "")
            .trim();
          const value = { innerHTML: result, defaultProps: attrs };
          return value;
        }
      }
    }

    throw new Error("No SVG was returned!");
  }
}

export class Icon {
  constructor(private fullName: string) {}

  async content() {
    const svgContent = await new IconFetcher(this.fullName).fetchIcon();
    const optimized = new SvgOptimizer(svgContent).optimized();
    const parsed = new SvgParser(optimized).parse();
    return parsed;
  }
}
