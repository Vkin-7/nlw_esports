import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    scroll: {
        width: '100%',
    },
    contentScroll: {
        alignItems: 'center',
        paddingBottom: 20,
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 32,
        marginTop: 28,
        justifyContent: 'space-between',
    },
    logo: {
        width: 72,
        height: 40,
    },
    right: {
        width: 20, 
        height: 20,
    },
    cover: {
        width: '85%',
        height: 160,
        borderRadius: 8,
        marginTop: 32,
    },
    list: {
        width: '100%',
    },
    contentList: {
        paddingLeft: 32,
        paddingRight: 64,
        alignItems: 'flex-start',
    },
    emptyListText: {
        color: THEME.COLORS.TEXT,
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
    },
    emptyListContent: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
});