import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import {Card} from 'react-native-elements'
import {LEADERS} from '../Shared/leaders'


class About extends React.Component{


  constructor(props)
  {
    super(props)
    this.state= {
      leaders : LEADERS
    }
  }

render()
  {
  const renderMenuItem = ({item, index}) => {

      return (

        <View>

                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: require('./images/alberto.png')}}
                  />

</View>


      );
  };

  return (
              <View>
              <ScrollView>
              <History>
              </History>
              <Card>

          <FlatList
              data={this.state.leaders}
              renderItem={renderMenuItem}
              keyExtractor={item => item.id.toString()}
              />

              </Card>
              </ScrollView>
              </View>


  )
}
}




function History()
{
  return(
    <Card>
    <Text style={
      {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom : 5,
  }
    }>Our History</Text>

    <View
  style={{
  marginBottom : 10,
  borderBottomColor: 'black',
  borderBottomWidth: 1,
  }}
  />
        <Text>
        Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong.
        With its unique brand of world fusion cuisine that can be found nowhere else,
         it enjoys patronage from the A-list clientele in Hong Kong.
        Featuring four of the best three-star Michelin chefs in the world,
         you never know what will arrive on your plate the next time you visit us.

{'\n'}{'\n'}The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.

        </Text>
        </Card>
  )
}

export default About
