<template>
  <div class="event-card">
    <span>@{{event.time}} on {{event.date}}</span>
    <h4>{{event.title}}</h4>
  </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event : Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card{
  width:50%;
  margin:16px auto;
  padding:8px 0;
  outline:1px solid navy;
}

</style>
