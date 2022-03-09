<template>
  <teleport to="#modals">
    <div class="modal-wrapper">
      <div class="modal">
        <slot>
          <h2>Cookies</h2>
          <p>vi sparar all din data och säljer till hägstbjudande.. bara så du vet</p>
          <button @click="$emit('close')">Close</button>
        </slot>

          <hr>
        <slot name="links">
          <!-- <a href="#">My website</a>
          <a href="#">Google</a>
          <a href="#">Altavista</a> -->
        </slot>

      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: 'ModalComponent'
}
</script>

<style>
  .modal-wrapper {
    background: #00000055;
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background: #fff;
    padding: 3rem;
    border-radius: .5em;
    box-shadow: 0 10px 2rem #11111144, 0 10px 5rem #33333323;
  }
  .input-group {
    margin-bottom: 2rem;
  } 
  .input-group label span {
    display: block;
    margin-bottom: 1rem;
  }
  .input-group label input {
    display: block;
    width: 100%;
    border-radius: .5em;
    border: 1px solid #333;
    padding: .4em .6em;
  }
</style>