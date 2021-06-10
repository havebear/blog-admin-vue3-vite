<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:08:01
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-10 10:38:39
 * @Description:  文章
-->

<template>
  <div class="data-page">
    <a-descriptions title="User Info" bordered style="background: #fff">
      <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
      <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
      <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
      <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
      <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
      <a-descriptions-item label="Status" :span="3">
        <a-badge status="processing" text="Running" />
      </a-descriptions-item>
      <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
      <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
      <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
      <a-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </a-descriptions-item>
    </a-descriptions>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style scoped lang="less">
.data-page {
  // background: #fff;
  padding: 15px;
}
</style>
