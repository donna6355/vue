<template>
  <div>
    <h1>Event for pets</h1>
    <div class="home">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 123456,
          category: "animal welfare",
          title: "Cat Adoption Day",
          description: " Find your new family here",
          date: "January 28,2022",
          time: "11:00",
        },
        {
          id: 1212356,
          category: "animal brand",
          title: "Cat and dog products",
          description: "buy one get one free",
          date: "January 8,2022",
          time: "13:00",
        },
        {
          id: 1256756,
          category: "vet",
          title: "Free medical check",
          description: "Prevent medical issue in advance",
          date: "January 22,2022",
          time: "09:00",
        },
        {
          id: 94856,
          category: "animal welfare",
          title: "Cat grooming day",
          description: " Beautify your cat!",
          date: "March 28,2022",
          time: "11:50",
        },
      ],
    };
  },
};
</script>
