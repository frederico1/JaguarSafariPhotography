<template>
  <JaguarNavigation></JaguarNavigation>
  <!-- eslint-disable -->
  <div class="p-4">
    <div class="mx-auto">
      <div class="pt-10 md:pt-0">
        <h1
          class="lg:text-3xl md:text-2xl text-xl font-medium text-center text-[#1b6dc1] tracking-widest"
        >
          Jaguar Safari in Porto Jofre
        </h1>
      </div>
      <div
        class="pt-10 md:w-4/4 lg:w-3/4 flex justify-center items-center mx-auto text-center md:indent-8"
      >
        <p class="md:text-xl leading-relaxed text-justify">
          First, our company offers Pantanal jaguar safari photography starting
          in Cuiabá. However, we can start your Pantanal jaguar safari itinerary
          immediately upon your arrival. In fact, you have the possibility to
          stay overnight in a hotel in the city. In this case, our Tour Agency
          will pick you up the next day at 8:00 am to take you to the lodge.
          Also, we’ll take you a hundred kilometers to a small town called
          Poconé. Therefore, this city is at the end of civilization, it is the
          beginning of the Estrada Parque Transpantaneira. Subsequently, the
          path will be one hundred and fifty kilometers on a dirt road. This
          time, to the lodge in Porto Jofre. Certainly, the trip is interesting,
          you will see many wild animals.
        </p>
      </div>
    </div>
    <div class="pt-10">
      <div class="">
        <h1
          class="md:mt-20 lg:text-3xl md:text-2xl text-xl font-medium text-center text-[#1b6dc1] tracking-widest"
        >
          Jaguar Tour Itinararies
        </h1>
      </div>

      <!-- 4 DAYS -->
      <div
        class="md:flex md:flex-col lg:grid lg:grid-cols-3 mx-auto place-content-center"
      >
        <div class="pt-10 md:pt-20 flex justify-center items-center mx-auto">
          <div class="h-full">
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                max-height="200"
                aspect-ratio=""
                cover
                src="../assets/img/jaguar4nightspanel.jpg"
              ></v-img>
            </div>
            <div class="w-[350px] md:max-w-[700px] lg:max-w-[500px] md:w-full">
              <v-stepper
                style="font-weight: 600"
                color="#1b6dc1"
                class=""
                prev-text="Preview"
                next-text="Next"
                :items="['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']"
              >
                <template v-slot:item.1>
                  <v-card
                    title="Step One"
                    flat
                    class="leading-normal md:text-xl"
                    >First, on this Jaguar safari photography, we will pick you
                    up at the airport or hotel in Cuiabá and transfer to the
                    Lodge. Generally, the trip takes 3 hours. In fact, we’ll
                    take you 100 kilometers on a paved road, plus 40 kilometers
                    on the Transpantaneira. Certainly, you will see birds,
                    mammals and reptiles. You will arrive at the lodge for lunch
                    and then make a boat ride. On the boat, we usually see
                    hawks, kingfishers, anhingas, and Giant otters. You may also
                    see jaguars and various other types of animals. Dinner will
                    be at 07:00 pm at the Lodge, then at 08:00 pm. We will go on
                    a nightafari to observe some of the nocturnal animals.
                    Overnight.</v-card
                  >
                </template>

                <template v-slot:item.2>
                  <v-card
                    title="Step Two"
                    flat
                    class="leading-normal md:text-xl"
                    >Second day. This time you will make a morning walk in the
                    forest to watch the sunrise. Then breakfast, followed by
                    hiking in the forest. Thre, you may see some animals living
                    in different habitats. We usually see monkeys, Deers,
                    Woodcreepers. However, if you’re lucky. You may also see
                    Trogons and Motmots. Lunch and transfer to the lodge in
                    Porto Jofre. The drive will be 110 kilometers along the
                    Transpantaneira until the end of the road. Dinner at 07:00
                    pm and Overnight.</v-card
                  >
                </template>

                <template v-slot:item.3>
                  <v-card
                    title="Step Three"
                    flat
                    class="leading-normal md:text-xl"
                    >Third day. Breakfast is at 06:00 am. Then, this is the
                    beginning of your jaguar safari itinerary. Once we’re ready,
                    we’ll make a boat drive in search of jaguars and giant
                    otters along the Cuiabá River in the Pantanal State Park
                    Encontro das Águas. Lunch is a picnic on the river at 12:00
                    pm followed by a short siesta. Then, we will make the second
                    part of the tour until 05:00 pm. In total, it will be ten
                    hours making this jaguar safari itinerary. Dinner and
                    overnight.
                  </v-card>
                </template>
                <template v-slot:item.4>
                  <v-card
                    title="Step Four"
                    flat
                    class="leading-normal md:text-xl"
                    >Fourth day. Breakfast, transfer back to the lodge on the
                    Transpantaneira. Lunch and horseback ride or another boat
                    ride. Dinner at 7:00 pm followed by night safari. Generally,
                    on a night safari, we see foxes, Raccoons. If we are lucky,
                    we may also, see Giant anteaters, Tapirs, or even Ocelots.
                    We might also, see birds like, Owls, Night Hawks and Potoos.
                    Overnight.
                  </v-card>
                </template>
                <template v-slot:item.5>
                  <v-card
                    title="Step Five"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    Fifth day. Morning walk in the forest to watch the sunrise.
                    Breakfast and transfer to the airport or hotel in Cuiabá.
                    This Jaguar safari itinerary includes, accommodation,
                    transfers, all meals,water and a naturalist tour guide. No
                    beverages.
                  </v-card>
                </template>
              </v-stepper>
            </div>
          </div>
        </div>
        <!-- eslint-disable -->

        <!-- 6 DAYS -->
        <div class="pt-10 md:pt-20 flex justify-center items-center mx-auto">
          <div class="h-full">
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                max-height="200"
                aspect-ratio=""
                cover
                src="../assets/img/jaguar6nightspanel.jpg"
              ></v-img>
            </div>
            <div class="w-[350px] md:max-w-[700px] lg:max-w-[500px] md:w-full">
              <v-stepper
                style="font-weight: 600"
                color="#1b6dc1"
                class="w-full"
                prev-text="Preview"
                next-text="Next"
                :items="[
                  'Step 1',
                  'Step 2',
                  'Step 3',
                  'Step 4',
                  'Step 5',
                  'Step 6',
                  'Step 7',
                ]"
              >
                <template v-slot:item.1>
                  <v-card
                    title="Step One"
                    flat
                    class="leading-normal md:text-xl"
                    >Eventually, on the first day of your Pantanal jaguar safari
                    expeditions and photography. Our guide will pick you up at
                    the Hotel in Cuiabá and take you to the lodge in the
                    Pantanal. Meanwhile, on the Transpantaneira, you will see
                    birds, mammals and reptiles. Lunch is at noon. Afterwards,
                    you will make a boat ride. There, you may see hawks,
                    kingfishers, otters, sometimes even jaguars on this river.
                    Dinner followed by a nightafari and overnight.</v-card
                  >
                </template>

                <template v-slot:item.2>
                  <v-card
                    title="Step Two"
                    flat
                    class="leading-normal md:text-xl"
                    >On the second day, you will go for a morning walk to the
                    tower to watch the sunrise. Breakfast at 07:00 am.
                    Afterwards, you go for a hike in the forests of the farm.
                    Certainly, you may see monkeys, Agoutis and birds of many
                    kinds in this forest. Lunch is at noon. After that, drive to
                    the lodge in Porto Jofre. Arrival for dinner around 7:00 pm.
                    Overnight.</v-card
                  >
                </template>

                <template v-slot:item.3>
                  <v-card
                    title="Step Three"
                    flat
                    class="leading-normal md:text-xl"
                    >On the third day, we start the jaguar safari Itinerary.
                    This time you will have breakfast at 6:00 am. After that,
                    you will make your first jaguar safari from 07:00 am to
                    05:00 pm. Actually looking for jaguars and Giant otters in
                    the State Park Encontro das Águas. Lunch is a picnic on the
                    river at noon. After that, you go to the second part of your
                    jaguar safari itinerary. In truth, you will spend ten hours
                    on the boat. Dinner at 7:00 pm and overnight.
                  </v-card>
                </template>
                <template v-slot:item.4>
                  <v-card
                    title="Step Four"
                    flat
                    class="leading-normal md:text-xl"
                    >On the fourth day. In similar fashion, you will make a
                    jaguar trip for 10 hours, having lunch on the river and
                    returning to the lodge at 05:00 pm. Dinner and overnight. On
                    this jaguar trip exemple, you will make two full days on the
                    river, totalizing 20 hours boat drive. But, we are flexible
                    to make your tour according to your wishes.
                  </v-card>
                </template>
                <template v-slot:item.5>
                  <v-card
                    title="Step Five"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    Fifth day. This time, you will have breakfast. Thereafter,
                    our guide will drive you to a different lodge on the
                    Transpantaneira. Certainly, you will see lots of animals in
                    the farm. For instance, Tapirs, Anteaters, Caymans, and many
                    birds of different kinds. Lunch is at noon, after that, you
                    will go for a hike in the forests of the farm. Dinner
                    followed by night safari and overnight.
                  </v-card>
                </template>
                <template v-slot:item.6>
                  <v-card
                    title="Step Six"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    On the sixth day, you will go for a morning walk to watch
                    the sunrise. Breakfast is at 07:00 am. Afterwards, you go on
                    a photo safari. Generally, tourists see many birds, mammals
                    and reptiles on this tour. Lunch is at noon. All in all, in
                    the afternoon, you will go to the Tapir’s hide. This jaguar
                    safari photography is followed by a night safari on the way
                    back to the lodge. Dinner and overnight.
                  </v-card>
                </template>
                <template v-slot:item.7>
                  <v-card
                    title="Step Seven"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    Finally, on the seventh day. You will watch animals on the
                    bird feeder. Breakfast is at 07:00. Then, our guide will
                    take you back to Cuiabá. On this jaguar trip we include,
                    accommodation, transfers, all meals, water, and naturalistic
                    tour guide. No beverages.
                  </v-card>
                </template>
              </v-stepper>
            </div>
          </div>
        </div>

        <!-- 7 DAYS -->

        <div class="pt-10 md:pt-20 flex justify-center items-center mx-auto">
          <div class="h-full">
            <div>
              <v-img
                class="flex justify-center items-center mx-auto"
                max-height="200"
                aspect-ratio=""
                cover
                src="../assets/img/jaguar7nightspanel.jpg"
              ></v-img>
            </div>
            <div class="w-[350px] md:max-w-[700px] lg:max-w-[500px] md:w-full">
              <v-stepper
                style="font-weight: 600"
                color="#1b6dc1"
                class="w-full"
                prev-text="Preview"
                next-text="Next"
                :items="[
                  'Step 1',
                  'Step 2',
                  'Step 3',
                  'Step 4',
                  'Step 5',
                  'Step 6',
                  'Step 7',
                  'Step 8',
                ]"
              >
                <template v-slot:item.1>
                  <v-card
                    title="Step One"
                    flat
                    cclass="leading-normal md:text-xl"
                    >On the first day of our jaguar safari expeditions and
                    photography, our guide will pick you up at the airport or
                    your hotel in Cuiabá. After that, He will take you to the
                    lodge in the Pantanal. Meanwhile, on the Transpantaneira
                    park road, you will see mammals and reptiles and birds of
                    many kinds. Afterwards, you will arrive at the lodge for
                    lunch. After that, you will make a boat ride on the river.
                    Generally, you may see Hawks, Kingfishers and Giant Otters,
                    and if you are lucky, you may even see jaguars on the river
                    banks of the Rio Pixaim. Dinner is at 07:00 pm, followed by
                    night safari. Overnight.</v-card
                  >
                </template>

                <template v-slot:item.2>
                  <v-card
                    title="Step Two"
                    flat
                    class="leading-normal md:text-xl"
                    >On the second day. Soon, You will make a mornig walk to the
                    tower to watch the sunrise. Breakfast at 07:00 am. After
                    that, you will go for a hike in the forests. Usually, we see
                    Monkeys, Trogons and Motmots in the trails of the farm.
                    Lunch is at noon, then,your tour guide will drive you to the
                    lodge in Porto Jofre. Dinner and overnight.</v-card
                  >
                </template>

                <template v-slot:item.3>
                  <v-card
                    title="Step Three"
                    flat
                    class="leading-normal md:text-xl"
                    >On the third day, is the beginning of your jaguar trip.
                    Breakfast at 06:00 am. After that, you start your jaguar
                    safari. Altogether, from 7:00 am to 05:00 pm, you will make
                    a jaguar trip by boat in the Pantanal state park Encontro
                    das Águas. At noon, you will make a picnic, on the river.
                    After that, you return to the lodge. In fact, you will make
                    a jaguar trip for ten hours. Dinner and overnight.
                  </v-card>
                </template>
                <template v-slot:item.4>
                  <v-card
                    title="Step Four"
                    flat
                    cclass="leading-normal md:text-xl"
                    >On the fourth day. In the same way, you will go looking for
                    jaguars and Giant Otter on the river again. At noon, you
                    will make a picnic ont the river. After that, you will stay
                    on the river until 05:00 pm. Then, you return to the lodge
                    for Dinner and overnight.
                  </v-card>
                </template>
                <template v-slot:item.5>
                  <v-card
                    title="Step Five"
                    flat
                    class="leading-normal md:text-xl"
                    >On the fifth day. In the same way, you will make the jaguar
                    trip by boat. In short, you will make ten hours boat drive
                    with picnic on the river. Dinner and overnight. In sum, On
                    this Jaguar trip you will be 30 hours on the river looking
                    for these beautiful Jaguars.
                  </v-card>
                </template>
                <template v-slot:item.6>
                  <v-card
                    title="Step Six"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    On the sixth day of your jaguar safari expeditions and
                    photography, you will start the last part of your tour.
                    After breakfast, your guide will drive you back to a third
                    lodge on the Transpantaneira. In this new farm, you may see
                    many animals too. Such, as Tapirs, Anteaters, Peccaries,
                    Ocelots and lots of birds of many kinds. After lunch, you
                    will make a walk in the forests of the farm. Dinner followed
                    by night safari. Overnight.
                  </v-card>
                </template>
                <template v-slot:item.7>
                  <v-card
                    title="Step Seven"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    On the seventh day. You wull make a morning walk to watch
                    the sunrise, After breakfast, you will make a photo safari.
                    Then, you will have lunch at noon . After that, you will go
                    to the Tapirs’ hide. Generally, Tayras, Peccaries and many
                    birds will come around the hide to drink water in a pond. At
                    dusk, you return to the lodge making a night safari. Dinner
                    and overnight.
                  </v-card>
                </template>
                <template v-slot:item.8>
                  <v-card
                    title="Step Eight"
                    flat
                    class="leading-normal md:text-xl"
                  >
                    On the eighth day. You will watch some animals eating at the
                    bird feeder. In fact, you can photograph them really close
                    to you. After breakfast, your guide will drop you off in
                    Cuiabá.
                  </v-card>
                </template>
              </v-stepper>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import JaguarNavigation from "../components/JaguarNavigation.vue";
export default {
  components: {
    JaguarNavigation,
  },
};
/* eslint-disable */
</script>

<style scoped></style>
