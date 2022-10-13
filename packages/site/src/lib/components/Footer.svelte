<script lang="ts">
    import VercelBanner from './VercelBanner.svelte';
</script>

<div class="footer">
    <div class="container">
        <VercelBanner />
        <a href="https://sanity.io/" target="_blank">Structured content powered by Sanity.io</a>
    </div>
</div>

<style>
    a {
        display: block;
        color: var(--color-text);
        font-size: var(--text-sm);
        margin-top: calc(var(--space) * 2);
        text-decoration: underline;
    }
    
    .footer {
        background-color: var(--color-bg);
        margin-top: calc(5 * var(--space));
        padding: calc(var(--space) * 5) 0;
    }
    
    .container {
        max-width: 1000px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding: 0 calc(var(--space) * 4);
    }
</style>