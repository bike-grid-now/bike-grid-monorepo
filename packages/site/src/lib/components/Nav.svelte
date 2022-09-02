<div class="nav-outer">
  <div class="content">
    <nav>
      <a href="/" class="logo">
        <span class="material-symbols-outlined icon">pedal_bike</span>
        <p><b>Chicago, Bike Grid Now!</b></p>
      </a>

      <div class="spacer" />
    </nav>
  </div>
</div>

<style>
  .nav-outer {
    position: sticky;
    top: 0.75rem;
    z-index: 99;
    width: 100%;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
  }

  a.logo {
    text-decoration: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: white;
  }

  .icon {
    margin-right: 0.5rem;
  }

  nav {
    width: 100%;
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;

    background-color: #1b1a1b;

    color: white;
    padding: 1.2rem;
    margin-bottom: 1.5rem;
    border-radius: 15px;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    transition: box-shadow 0.15s;
  }
</style>
