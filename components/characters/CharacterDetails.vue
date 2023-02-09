<template>
  <div class="grid sm:grid-cols-[theme(spacing.72)_1fr] gap-4">
    <div class="flex flex-col gap-2">
      <BaseImage :src="character.images.lg" :alt="character.name" rounded />
      <BasePanel title="Power Stats">
        <div class="grid grid-cols-2">
          <LabeledInfo label="Combat" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.combat }}
          </LabeledInfo>
          <LabeledInfo label="Durability" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.durability }}
          </LabeledInfo>
          <LabeledInfo label="Intelligence" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.intelligence }}
          </LabeledInfo>
          <LabeledInfo label="Power" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.power }}
          </LabeledInfo>
          <LabeledInfo label="Speed" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.speed }}
          </LabeledInfo>
          <LabeledInfo label="Strength" text-class="text-2xl" is-text-bold>
            {{ character.powerstats.strength }}
          </LabeledInfo>
        </div>
      </BasePanel>
    </div>
    <div class="flex flex-col gap-2">
      <BasePanel title="Appearance">
        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1"
        >
          <LabeledInfo label="Gender">
            {{ character.appearance.gender }}
          </LabeledInfo>
          <LabeledInfo label="Hair Color">
            {{ character.appearance.hairColor }}
          </LabeledInfo>
          <LabeledInfo label="Eye Color">
            {{ character.appearance.eyeColor }}
          </LabeledInfo>
          <LabeledInfo label="Height">
            {{ character.appearance.height[1] }}
          </LabeledInfo>
          <LabeledInfo label="Weight">
            {{ character.appearance.weight[1] }}
          </LabeledInfo>
          <LabeledInfo label="Race">
            {{ character.appearance.race }}
          </LabeledInfo>
        </div>
      </BasePanel>
      <BasePanel title="Biography">
        <div
          class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1"
        >
          <LabeledInfo label="Full Name" text-class="text-md">
            {{ character.biography.fullName }}
          </LabeledInfo>
          <LabeledInfo label="Aliases" text-class="text-md">
            <ul>
              <li v-for="alias in character.biography.aliases" :key="alias">
                {{ alias }}
              </li>
            </ul>
          </LabeledInfo>
          <LabeledInfo label="Alter Egos" text-class="text-md">
            {{ character.biography.alterEgos }}
          </LabeledInfo>
          <LabeledInfo label="Place of Birth" text-class="text-md">
            {{ character.biography.placeOfBirth }}
          </LabeledInfo>
          <LabeledInfo label="Alignment" text-class="text-md">
            {{ character.biography.alignment }}
          </LabeledInfo>
          <LabeledInfo label="Publisher" text-class="text-md">
            {{ character.biography.publisher }}
          </LabeledInfo>
          <LabeledInfo label="First Appearance" text-class="text-md">
            {{ character.biography.firstAppearance }}
          </LabeledInfo>
        </div>
      </BasePanel>
      <BasePanel title="Connections">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <LabeledInfo label="Group Affiliation" text-class="text-md">
            {{ character.connections.groupAffiliation }}
          </LabeledInfo>
          <LabeledInfo label="Relatives" text-class="text-md">
            {{ character.connections.relatives }}
          </LabeledInfo>
        </div>
      </BasePanel>
      <BasePanel title="Work">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-1">
          <LabeledInfo label="Occupation" text-class="text-md">
            {{ character.work.occupation }}
          </LabeledInfo>
          <LabeledInfo label="Base" text-class="text-md">
            {{ character.work.base }}
          </LabeledInfo>
        </div>
      </BasePanel>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    character: { type: Object, required: true },
  },
});
</script>
