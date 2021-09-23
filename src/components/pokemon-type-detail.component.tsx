import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

const PokemonTypeDetail = ({ typeName }: { typeName: string }) => {
    return (
        <View>
            {
                getColor(typeName)
            }
        </View>
    )
}

const getColor = (type: string) => {
    let myContent;
    switch (type) {
        case 'normal':
            myContent = <View style={{ backgroundColor: '#A8A77A', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'fire':
            myContent = <View style={{ backgroundColor: '#EE8130', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'water':
            myContent = <View style={{ backgroundColor: '#6390F0', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'electric':
            myContent = <View style={{ backgroundColor: '#F7D02C', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'grass':
            myContent = <View style={{ backgroundColor: '#7AC74C', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'ice':
            myContent = <View style={{ backgroundColor: '#96D9D6', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'fighting':
            myContent = <View style={{ backgroundColor: '#C22E28', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'poison':
            myContent = <View style={{ backgroundColor: '#A33EA1', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'ground':
            myContent = <View style={{ backgroundColor: '#E2BF65', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'flying':
            myContent = <View style={{ backgroundColor: '#A98FF3', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'psychic':
            myContent = <View style={{ backgroundColor: '#F95587', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'bug':
            myContent = <View style={{ backgroundColor: '#A6B91A', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'rock':
            myContent = <View style={{ backgroundColor: '#B6A136', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'ghost':
            myContent = <View style={{ backgroundColor: '#735797', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'dragon':
            myContent = <View style={{ backgroundColor: '#6F35FC', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'dark':
            myContent = <View style={{ backgroundColor: '#705746', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white', padding: 5 }}>
                    {type}
                </Text>
            </View>
            break;
        case 'steel':
            myContent = <View style={{ backgroundColor: '#B7B7CE', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white' }}>
                    {type}
                </Text>
            </View>
            break;
        case 'fairy':
            myContent = <View style={{ backgroundColor: '#D685AD', flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: 60, borderRadius: 2 }}>
                <Text style={{ color: 'white' }}>
                    {type}
                </Text>
            </View>
            break;
        default:
            break;
    }
    return myContent;
}

export default PokemonTypeDetail;