<template>
  <v-layout>
    <v-flex class="text-center">
      <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width: 1200px; height: 760px"
      />
    </v-flex>
  </v-layout>
</template>
