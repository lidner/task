<template>
  <table class="tree-table">
    <thead>
      <tr>
        <th>Наименование</th>
        <th v-for="year in years" :key="year.id">{{ year.value }}</th>
      </tr>
    </thead>
    <tbody>
      <TreeNodeRow v-for="(node, nodeName) in dataObject" :key="nodeName" :nodeName="nodeName" :node="node"  />
    </tbody>
  </table>
</template>

<script setup>
import { defineProps } from 'vue';
import TreeNodeRow from './TreeNodeRow.vue';

const props = defineProps({
  dataObject: Object,
  years: Array
});
</script>

<style>
.tree-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 1210px;
}

.tree-table thead {
  position: sticky;
  top: 0;
  border: 1px solid #ccc;
  background: #424651;
  z-index: 1;
}

.tree-table th, .tree-table td {
  border: 1px solid #ccc;
  padding: 8px;
}

.tree-table td:first-child {
  word-wrap: break-word;
  white-space: nowrap;
  overflow: hidden;
  }
</style>
