<template>
<div>
  <h1>Tasks</h1>
  <div class="legend">
   <span>Double click to mark as complete</span>
   <span>
<span class="incomplete-box">#</span> = Incomplete
   </span>
      <span>
<span class="complete-box">#</span> = Complete
   </span>

 </div>
 </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.tasks {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}
.task {
   border: 1px solid #ccc; 
   background: #7143f0;
   padding: 1rem;
   border-radius: 5px;
   text-align: center;
   position: relative;
   cursor: pointer;
}
i {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: whitesmoke;
    cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.complete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #35495e;
}
.incomplete-box {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #41e882;
}

</style>