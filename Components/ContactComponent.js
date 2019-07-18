import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import {Card} from 'react-native-elements'

function RenderItem()
  {
      return(
        <Card>
        <Text style={
          {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
      }
        }>Contact Information</Text>

        <View
  style={{
    marginBottom : 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
            <Text>
                {'\n'}{'\n'}
                121, Clear Water Bay Road {'\n'}{'\n'}
                Clear Water Bay, Kowloon{'\n'}{'\n'}
                HONG KONG{'\n'}{'\n'}
                Tel: +852 1234 5678{'\n'}{'\n'}
                Fax: +852 8765 4321{'\n'}{'\n'}
                Email:confusion@food.net
            </Text>
            </Card>
      )
  }
class Contact extends React.Component{

  static navigationOptions = {
      title: 'Contact Us'
  };
  render()
  {
    return (
      <RenderItem>
      </RenderItem>
    )
  }

}

export default Contact
