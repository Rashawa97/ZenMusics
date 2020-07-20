import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet } from 'react-native'
import { View, Text, useThemeColor } from '../../components/Themed'
import { StackNavigationProp } from '@react-navigation/stack'
import { GetArtistsPageService } from '../../services/GetArtistsPageService'
import ArtistComponent from '../../components/Artists/ArtistComponent'
import ThemedButton from '../../components/ThemedButton'

export default function PaginationLayout(props:
    {
        children: JSX.Element;
        onPageChange: (page: number) => void;
        lastPage: number;
    }) {

    let { children, onPageChange, lastPage } = props;

    const styles = StyleSheet.create({
        navigationButtonsContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 5,
            alignItems: "center",

            //backgroundColor: useThemeColor({},"mainColor")
        }
    })


    const [pageNumber, setPageNumber] = useState<number>(1);

    const hundlePageChange = (pageNumber:number)=>
    {
        onPageChange(pageNumber);
        setPageNumber(pageNumber);
    }

    return (
        <View>

            <View style={styles.navigationButtonsContainer}>
                <ThemedButton title="previous" onPress={() => hundlePageChange(pageNumber - 1)} disabled={pageNumber == 1} />
                <Text>page {pageNumber} of {lastPage}</Text>
                <ThemedButton title="next" onPress={() => hundlePageChange(pageNumber + 1)} disabled={pageNumber == lastPage} />


            </View>

            {children}

        </View>
    )
}

