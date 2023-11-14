<template>
  <div class="card">
    <a class="card1" href="#">
      <img src="../assets//img/oncapintada3.jpg" alt="" />
      <div class="flex flex-col gap-3">
        <p class="font-bold text-[#666] text-2xl pt-2">
          Jaguar tour 6 nights / 7 days
        </p>
        <p class="small text-base">
          It includes two nights Pantanal trip in a lodge in the Transpantaneira
          plus four nights in Porto Jofre. 30 hours jaguar safari.
        </p>
      </div>

      <div class="go-corner" href="#">
        <div class="go-arrow">→</div>
      </div>
    </a>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  name: "JaguarCard7",
};
</script>
<style scoped>
.go-corner {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 32px;
  height: 32px;
  overflow: hidden;
  top: 0;
  right: 0;
  background-color: #00838d;
  border-radius: 0 4px 0 20px;
}

.go-arrow {
  margin-top: -4px;
  margin-right: -4px;
  color: white;
  font-family: courier, sans;
}

.card1 {
  display: block;
  position: relative;
  max-width: 400px;
  background-color: #f2f8f9;
  border-radius: 4px;
  padding: 52px 24px;
  margin: 12px;
  text-decoration: none;
  z-index: 0;
  overflow: hidden;
}

.card1:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -24px;
  right: -24px;
  background: #00838d;
  height: 60px;
  width: 60px;
  border-radius: 12px;
  transform: scale(1);
  transform-origin: 50% 50%;
  transition: transform 0.25s ease-out;
}

.card1:hover:before {
  transform: scale(21);
}

.card1:hover p {
  transition: all 0.3s ease-out;
  color: rgba(255, 255, 255, 0.8);
}

.card1:hover h3 {
  transition: all 0.3s ease-out;
  color: #fff;
}
</style>
