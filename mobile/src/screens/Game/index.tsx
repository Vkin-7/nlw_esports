import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, FlatList, ScrollView, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';

import { styles } from './styles';
import { GameParams } from '../../@types/navigation';
import { THEME } from '../../theme';
import logoImg from '../../assets/logo-nlw-esports.png';
import { Heading } from '../../components/Heading';
import { DuoCard, DuoCardProps } from '../../components/DuoCard';
import { DuoMatch } from '../../components/DuoMatch';

export function Game() {
    const route = useRoute();
    const navigation = useNavigation();

    const game = route.params as GameParams;

    const [duos, setDuos] = useState<DuoCardProps[]>([]);
    const [discordDuoSelected, setDiscordDuoSelected] = useState('');

    function handleGoBack() {
        navigation.goBack();
    }

    function getDiscordUser(adsId: string) {
        try {
            fetch(`http://192.168.0.110:3333/ads/${adsId}/discord`)
                .then(res => res.json())
                .then(data => setDiscordDuoSelected(data.discord));
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    useEffect(() => {
        fetch(`http://192.168.0.110:3333/games/${game.id}/ads`)
            .then(res => res.json())
            .then(data => setDuos(data));
    }, []);
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentScroll}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={handleGoBack}>
                        <Entypo
                            name='chevron-thin-left'
                            color={THEME.COLORS.CAPTION_300}
                            size={20}
                        />
                    </TouchableOpacity>

                    <Image 
                        source={logoImg} 
                        style={styles.logo}
                    />

                    <View style={styles.right} />
                </View>

                <Image 
                    source={{ uri: game.bannerUrl }}
                    style={styles.cover}
                    resizeMode='cover'
                />

                <Heading
                    title={game.title}
                    subtitle='Conecte-se e comece a jogar!'
                />

                <FlatList
                    data={duos}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <DuoCard 
                            data={item} 
                            onConnect={() => getDiscordUser(item.id)} />
                    )}
                    horizontal
                    style={styles.list}
                    contentContainerStyle={[duos.length > 0 ? styles.contentList : styles.emptyListContent]}
                    showsHorizontalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={styles.emptyListText}>
                            Não há anúncios publicados ainda.
                        </Text>
                    )}
                />

            </ScrollView>

            <DuoMatch
                visible={discordDuoSelected.length > 0 ? true : false}
                discord={discordDuoSelected}
                onClose={() => setDiscordDuoSelected('')}
            />
        </SafeAreaView>
    );
}