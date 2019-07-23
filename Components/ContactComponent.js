import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ListItem, Card,Button, Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { MailComposer } from 'expo';





class Contact extends React.Component{

  sendMail() {
          MailComposer.composeAsync({
              recipients: ['confusion@food.net'],
              subject: 'Enquiry',
              body: 'To whom it may concern:'
          })
      }

  static navigationOptions = {
      title: 'Contact Us'
  };
  render()
  {
    return (
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
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
          <Button

                     title="Send Email"
                     buttonStyle={{marginTop:10, backgroundColor: "#512DA8"}}
                     icon={<Icon name='envelope-o' type='font-awesome' color='white' />}
                     onPress={this.sendMail}
                     />
          </Card>
      </Animatable.View>
    )
  }

}

export default Contact
