<template>
  <div class="content">
    <h3 class="welcome-message">Благодарю за уделенное время на проверку тестового задания</h3>
    
    <p>Задание 1</p>
    <TreeTable :dataObject="data" :years="years" />

    <p>Задание 2</p>
    <div class="code-container">
    <code class="sql">
      SELECT
        project,
        constructive,
        under_constructive,
        work_group,
        block,
        floor,
        level,
        MIN(base_plan_start_date) AS min_base_plan_start_date,
        MAX(base_plan_finish_date) AS max_base_plan_finish_date,
        json_agg(json_build_array(contractor, plan_value) ORDER BY plan_value DESC NULLS LAST) AS contractors_info
    FROM
        table_first_task
    GROUP BY
        project,
        constructive,
        under_constructive,
        work_group,
        block,
        floor,
        level;
    </code>
</div>
  </div>
</template>

<script setup>
import TreeTable from './components/TreeTable.vue';

import data from './data/res-second-task.json'

const years = [
  {
    id: 2020,
    value: 2020
  },
  {
    id: 2021,
    value: 2021
  },
  {
    id: 2022,
    value: 2022
  },
  {
    id: 2023,
    value: 2023
  },
  {
    id: 2024,
    value: 2024
  },
]
</script>


<style>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.code-container {
    width: 80%;
    max-width: 800px;
    background-color: #2d2d2d;
    border: 1px solid #3a3a3a;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    white-space: pre-wrap;
    overflow-x: auto;
    font-size: 14px;
    line-height: 1.5;
}

.code-container code {
    color: #333333;
}

.code-container code.sql {
    color: #ccc;
}

.code-container code.comment {
    color: #888888;
}
</style>