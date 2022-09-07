<script lang="ts">
    import CalendarMonthIcon from "@material-symbols/svg-400/rounded/calendar_month.svg?component";
    import { format } from "date-fns";
    import type { PageData } from "./$types";
    import SvelteMarkdown from 'svelte-markdown'
    import NewTabLink from "../../../NewTabLink.svelte";
  
    export let data: PageData;
    let { post: stringifiedPost } = data;
    let post = stringifiedPost[0]

    console.log('post', post)
  
    function formatDate(date: any) {
        let t = new Date(1970, 0, 1);
        t.setSeconds(date.seconds - 18000); // uhhhhhhhh????????? don't think I did this right lol
        return format(t, "EEEE, LLLL d");
    }

    function getImageUrl(imagePath: string) {
        const BASE =
        "https://firebasestorage.googleapis.com/v0/b/bike-grid-now.appspot.com/o";
        const PARAMS = "alt=media";

        return `${BASE}/${encodeURIComponent(imagePath)}?${PARAMS}`;
    }
</script>

<div class="responsive-container">
    <div class="card">
        <div class="card-inner">

            {#if post}
                <h1>{post.title}</h1>

                {#if post.subtitle}
                    <h2>{post.subtitle}</h2>
                {/if}

                <div class="horizontal">
                    <CalendarMonthIcon viewBox="0 0 48 48" width="1.5rem" height="1.5rem" color="white" />
                    
                    <p>{formatDate(post.createdOn)}</p>
                </div>

                {#if post.image}
                    <img src={getImageUrl(post.image)}/>
                {/if}

                <div class="markdown">
                    <SvelteMarkdown source={post.body} renderers={{
                        link: NewTabLink,
                    }}/>
                </div>
            {/if}
        </div>
    </div>
</div>

<style>
    .card-inner {
        max-width: 700px;
        margin: auto;
        display: flex;
        flex-direction: column;
        gap: 25px;
        margin-top: 25px;
        margin-bottom: 25px;
        /* padding: 0px 25px; */
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
        /* margin-top: 25px; */
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 400;
    }

    .published {
        display: flex;
        align-items: center;
        gap: 10px;
        color: white;
    }

    p {
        /* font-weight: 400; */
    }

    img {
        width: 100%;
        border-radius: 10px;
    }

    .markdown {
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .horizontal {
        color: white !important;
        fill: white;
        display: flex;
        align-items: center;
        gap: 10px;
    }
</style>