<template>
  <tr :class="{ 'child-node': level > 0 }">
    <td @click="toggleChildren" :style="{ cursor: hasChildren ? 'pointer' : 'default' }">
      <div :style="{ 'padding-left': (level * 20) + 'px' }" class="key-namings">
        <span v-if="hasChildren" :class="{ 'arrow': true, 'expanded': expanded }">&#9654;</span>
        {{ nodeName }}
      </div>
    </td>
    <template v-for="year in ['2020', '2021', '2022', '2023', '2024']">
      <td>{{ formatNumber(node.data[year]) || '-' }}</td>
    </template>
  </tr>

  <TreeNodeRow v-if="expanded && hasChildren" v-for="(node, nodeName) in node.children"
                  :key="nodeName"
                  :nodeName="nodeName"
                  :node="node"
                  :level="level + 1"
      />
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  nodeName: String,
  node: Object,
  level: {
    type: Number,
    default: 0
  }
});

const expanded = ref(false);

const hasChildren = computed(() => {
  return props.node.children && Object.keys(props.node.children).length > 0;
});

const isChild = computed(() => {
  return props.parentNode !== undefined;
});

const toggleChildren = () => {
  if (hasChildren.value) {
    expanded.value = !expanded.value;
  }
};

const formatNumber = (num) => {
  if (typeof num !== 'number') return '-';
  return num.toLocaleString('ru-RU');
};
</script>

<style>
.arrow {
  display: inline-block;
  margin-right: 5px;
  transition: transform 0.3s;
}

.arrow.expanded {
  transform: rotate(90deg);
}

.nested-row {
  padding: 0;
  padding-left: 1rem;
}

.key-namings {
  text-align: left;
  width: 100%;
  overflow: hidden;
}
</style>
