#!/bin/bash

libs=("player-service" "player-configs");

for element in "${libs[@]}"
do
    cd "../libs/$element";

    npm ci

    npx typedoc --out "../../docs/docs/$element" "./src/index.ts" --publicPath "./$element/";

    cd "../../scripts";
done
