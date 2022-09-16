import { StyleSheet, Dimensions } from 'react-native';
import { THEME } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width - width * .4,
        backgroundColor: THEME.COLORS.SHAPE,
        borderRadius: 8,
        padding: 20,
        marginRight: 16,
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 36,
        borderRadius: 6,
        backgroundColor: THEME.COLORS.PRIMARY,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: THEME.COLORS.TEXT,
        fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
        fontSize: THEME.FONT_SIZE.SM,
        marginLeft: 8,
    },
});