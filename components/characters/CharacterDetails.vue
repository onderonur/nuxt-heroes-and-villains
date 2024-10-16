<script setup lang="ts">
import type { Character } from '~~/types/character-types';

defineProps<{ character: Character }>();
</script>

<template>
  <div class="grid gap-2 sm:grid-cols-[theme(spacing.72)_1fr] md:gap-4">
    <div class="flex flex-col gap-2">
      <BaseImage
        :src="character.images.lg"
        :alt="character.name"
        rounded
        class="mx-auto max-w-xs sm:mx-0 sm:max-w-none"
      />
      <BasePanel title="Power Stats">
        <div class="grid grid-cols-2 gap-1">
          <CharacterPowerStat
            label="Combat"
            :value="character.powerstats.combat"
          />
          <CharacterPowerStat
            label="Durability"
            :value="character.powerstats.durability"
          />
          <CharacterPowerStat
            label="Intelligence"
            :value="character.powerstats.intelligence"
          />
          <CharacterPowerStat
            label="Power"
            :value="character.powerstats.power"
          />
          <CharacterPowerStat
            label="Speed"
            :value="character.powerstats.speed"
          />
          <CharacterPowerStat
            label="Strength"
            :value="character.powerstats.strength"
          />
        </div>
      </BasePanel>
    </div>
    <div class="flex flex-col gap-2">
      <BasePanel title="Appearance">
        <div
          class="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
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
          class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <LabeledInfo label="Full Name">
            {{ character.biography.fullName }}
          </LabeledInfo>
          <LabeledInfo label="Aliases">
            <ul>
              <li v-for="alias in character.biography.aliases" :key="alias">
                {{ alias }}
              </li>
            </ul>
          </LabeledInfo>
          <LabeledInfo label="Alter Egos">
            {{ character.biography.alterEgos }}
          </LabeledInfo>
          <LabeledInfo label="Place of Birth">
            {{ character.biography.placeOfBirth }}
          </LabeledInfo>
          <LabeledInfo label="Alignment">
            {{ character.biography.alignment }}
          </LabeledInfo>
          <LabeledInfo label="Publisher">
            {{ character.biography.publisher }}
          </LabeledInfo>
          <LabeledInfo label="First Appearance">
            {{ character.biography.firstAppearance }}
          </LabeledInfo>
        </div>
      </BasePanel>
      <BasePanel title="Connections">
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <LabeledInfo label="Group Affiliation">
            {{ character.connections.groupAffiliation }}
          </LabeledInfo>
          <LabeledInfo label="Relatives">
            {{ character.connections.relatives }}
          </LabeledInfo>
        </div>
      </BasePanel>
      <BasePanel title="Work">
        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <LabeledInfo label="Occupation">
            {{ character.work.occupation }}
          </LabeledInfo>
          <LabeledInfo label="Base">
            {{ character.work.base }}
          </LabeledInfo>
        </div>
      </BasePanel>
    </div>
  </div>
</template>
