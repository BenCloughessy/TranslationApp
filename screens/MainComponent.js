import { Text, ScrollView, StyleSheet} from "react-native"
import { Input } from '@rneui/themed';


const Main = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Input placeholder="Translate" containerStyle={styles.input} inputStyle={styles.inputText} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    input: {
        width: '50%',
        justifyContent: 'center',
        borderWidth: 3,
        borderBottomWidth: 0,
        borderRadius: 15,
        marginBottom: '15%'
    },
    inputText: {
        textAlign: 'center',
        fontStyle: 'italic',
        marginBottom: 0
    }
})

export default Main;