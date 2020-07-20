import React, { useState } from 'react'

import ThemedCard from '../ThemedCard';

export default function ArtistComponent(props: { artist: Artist, onPress: (artistId: number,artist:string) => void }) {
    let { artist, onPress } = props;
    

    return (
        <ThemedCard texts={[artist.artist]} icon="md-mic" onPress={()=>onPress(artist.id_artist,artist.artist)}/>
    )
}


