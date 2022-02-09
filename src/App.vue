<template>
    <div class="q-pa-md">
        <q-toolbar class="bg-purple text-white shadow-2 rounded-borders">
            <q-btn flat label="Homepage" />
            <q-space />

            <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
            <q-tabs v-model="tab">
                <q-tab name="tab1" label="Tab 1" />
                <q-tab name="tab2" label="Tab 2" />
                <q-tab name="tab3" label="Tab 3" />
            </q-tabs>
        </q-toolbar>
    </div>
    <q-tab-panels
        v-model="tab"
        animated
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
    >
        <q-tab-panel name="tab1">
            <div class="text-h4 q-mb-md">Mails</div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
        </q-tab-panel>

        <q-tab-panel name="tab2">
            <div class="text-h4 q-mb-md">Alarms</div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
        </q-tab-panel>

        <q-tab-panel name="tab3">
            <div class="text-h4 q-mb-md">Movies</div>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                praesentium cumque magnam odio iure quidem, quod illum numquam
                possimus obcaecati commodi minima assumenda consectetur culpa
                fuga nulla ullam. In, libero.
            </p>
        </q-tab-panel>
    </q-tab-panels>
</template>

<script>
export default {
    data() {
        return {
            tab: "tab1",
        };
    },
};
</script>

<style></style>
