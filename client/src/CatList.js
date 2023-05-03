import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CatCard from "./CatCard";

import black1 from './Cats/black1.png'
import black2 from './Cats/black2.png'
import black3 from './Cats/black3.png'
import black4 from './Cats/black4.png'
import black5 from './Cats/black5.png'
import blue1 from './Cats/blue1.png'
import blue2 from './Cats/blue2.png'
import blue3 from './Cats/blue3.png'
import blue4 from './Cats/blue4.png'
import brown1 from './Cats/brown1.png'
import brown2 from './Cats/brown2.png'
import brown3 from './Cats/brown3.png'
import brown4 from './Cats/brown4.png'
import brown5 from './Cats/brown5.png'
import brown6 from './Cats/brown6.png'
import brown7 from './Cats/brown7.png'
import brown8 from './Cats/brown8.png'
import brown9 from './Cats/brown9.png'
import calico from './Cats/calico.png'
import cottoncandy_blue from './Cats/cottoncandy_blue.png'
import cottoncandy_pink from './Cats/cottoncandy_pink.png'
import cream1 from './Cats/cream1.png'
import cream2 from './Cats/cream2.png'
import dark from './Cats/dark.png'
import gameboy1 from './Cats/gameboy1.png'
import gameboy2 from './Cats/gameboy2.png'
import gameboy3 from './Cats/gameboy3.png'
import ghost from './Cats/ghost.png'
import gold from './Cats/gold.png'
import gray1 from './Cats/gray1.png'
import gray2 from './Cats/gray2.png'
import gray3 from './Cats/gray3.png'
import hairless1 from './Cats/hairless1.png'
import hairless2 from './Cats/hairless2.png'
import indigo from './Cats/indigo.png'
import orange1 from './Cats/orange1.png'
import orange2 from './Cats/orange2.png'
import orange3 from './Cats/orange3.png'
import orange4 from './Cats/orange4.png'
import peach from './Cats/peach.png'
import radioactive from './Cats/radioactive.png'
import red1 from './Cats/red1.png'
import red2 from './Cats/red2.png'
import sealpoint from './Cats/sealpoint.png'
import teal from './Cats/teal.png'
import white from './Cats/white.png'
import whitegray1 from './Cats/whitegray1.png'
import whitegray2 from './Cats/whitegray2.png'
import yellow from './Cats/yellow.png'

function CatList({cats}){

    const catList = [black1, black2, black3, black4, black5, blue1, blue2, blue3, blue4, brown1, brown2, brown3, brown4, brown5, brown6, brown7, brown8, brown9, calico, cottoncandy_blue, cottoncandy_pink, cream1, cream2, dark, gameboy1, gameboy2, gameboy3, ghost, gold, gray1, gray2, gray3, hairless1, hairless2, indigo, orange1, orange2, orange3, orange4, peach, radioactive, red1, red2, sealpoint, teal, white, whitegray1, whitegray2, yellow]
    console.log(catList.length)

    const renderCats = cats?.map((cat, i)=>{
        return <CatCard 
                key={cat.id}
                name={cat.name}
                // image = {cat.image}
                image={catList[i]}
                description={cat.description}
                />
    })

    return(
        <View>
            {renderCats}
        </View>
    )
}
export default CatList;