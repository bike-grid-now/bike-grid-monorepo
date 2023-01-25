<script>
  import PageContainer from "$lib/components/PageContainer.svelte";
  import { PortableText } from "@portabletext/svelte";

  export let data;

  $: mayoralCandidates = data.mayoralCandidates;
  $: regularCandidates = data.regularCandidates;
  $: platformText = data.platformText;
</script>

<svelte:head>
  <title>Who's Endorsed The Grid? | Chicago, Bike Grid Now!</title>
</svelte:head>

<div class="page">
  <PageContainer>
    <h1>Who has endorsed the Bike Grid?</h1>
    <div class="markdown">
      <PortableText value={platformText} />
    </div>
    <table>
      <tr>
        <th>Office</th>
        <th>Name</th>
        <th>Endorsed the bike grid?</th>
        <th>Link</th>
      </tr>
      {#each mayoralCandidates as candidate}
        <tr>
          <td>{candidate.office.name}</td>
          <td>{candidate.name}</td>
          <td
            >{candidate.supportsPlatform === "yes"
              ? "✅ Yes"
              : candidate.supportsPlatform === "no"
              ? "❌ No"
              : "Contacted"}</td
          >
          <td>
            {#if candidate.link}
              <a target="_blank" href={candidate.link}>{candidate.linkText ?? "Link"}</a>
            {/if}
          </td>
        </tr>
      {/each}
      {#each regularCandidates as candidate}
        <tr>
          <td>{candidate.office.name}</td>
          <td>{candidate.name}</td>
          <td
            >{candidate.supportsPlatform === "yes"
              ? "✅ Yes"
              : candidate.supportsPlatform === "no"
              ? "❌ No"
              : "Contacted"}</td
          >
          <td>
            {#if candidate.link}
              <a href={candidate.link}>{candidate.linkText ?? "Link"}</a>
            {/if}
          </td>
        </tr>
      {/each}
    </table>
  </PageContainer>
</div>

<style>
  th {
    text-align: left;
    padding-bottom: calc(var(--space) * 4);
    border-bottom: 1px solid white;
  }

  td {
    padding-top: calc(var(--space) * 2);
    padding-bottom: calc(var(--space) * 2);
  }

  .page {
    margin-top: calc(var(--space) * 8);
  }

  a {
    color: white;
    text-decoration: underline;
  }

  .markdown {
    display: flex;
    flex-direction: column;
    gap: calc(6 * var(--space));
  }
</style>
