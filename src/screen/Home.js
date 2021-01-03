import React from 'react';
import { useEffect, useState } from 'react';
import { View, Text, FlatList } from "react-native";
import { getMembers } from '../service/MemberService';

function Home({route}) {

    const { token } = route.params;
    const [ members, setMembers ] = useState([])

    useEffect(() => {
        console.log(token);
        getMembers(token).then((response) => {
            setMembers(response)
        })
    }, [])

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            
            <FlatList
                data={members}
                renderItem={({item}) => {
                    <Text>{item.name}</Text>
                }}
                keyExtractor={item => item.id.toString()}
                ListEmptyComponent={<Text>EMPTY</Text>}/>
          </View>
      </View>
    );
}

export default Home
  