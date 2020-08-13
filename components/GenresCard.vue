<template>
    <div>
        <v-card>
            <v-card-title class="headline">
                Your favorite genres
            </v-card-title>
            <GenresChart type="top" />
        </v-card>
        <v-card>
            <v-card-title class="headline">
                Your recent genres
            </v-card-title>
            <GenresChart type="recent" />
        </v-card>
    </div>
</template>
