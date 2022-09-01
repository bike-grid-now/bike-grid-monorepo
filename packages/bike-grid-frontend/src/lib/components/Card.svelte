<script>
  export let icon,
    heading,
    subheading,
    link,
    notarget = false;
</script>

<a href={link} target={notarget ? "" : "_blank"} class="card">
  <div class="top">
    <span class="material-symbols-outlined">{icon}</span>
    <h1>{heading}</h1>
    <p>{subheading}</p>
  </div>
  <div class="bottom">
    <span class="material-symbols-outlined arrow">arrow_circle_right</span>
  </div>
</a>

<style>
  a {
    text-decoration: none;
    display: block;
  }

  .card {
    background-color: #1b1a1b;
    border-radius: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 25px;
    border: 1px solid rgb(0, 0, 0);
    text-align: center;

    color: white;

    transition: box-shadow 0.15s ease, background-color 0.15s ease;
  }

  .top {
    display: flex;
    flex-direction: column;
    grid-gap: 25px;
  }

  .card:hover,
  .card:focus {
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
    background-color: #c70909;
  }

  .card:hover .arrow,
  .card:focus .arrow {
    transform: translateX(10px);
  }

  .card span {
    font-size: 4rem;
  }

  .card p {
    line-height: 175%;
  }

  .arrow {
    font-size: 2rem;
    transition: transform 0.2s;
  }
</style>
