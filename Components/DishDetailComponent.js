import React from 'react';
import { Text,Modal, View, ScrollView , FlatList, StyleSheet,Button } from 'react-native';
import { Card , Icon, Input,Rating} from 'react-native-elements';
import {connect} from 'react-redux'
import {baseUrl} from '../shared/baseUrl'
import {postFavorite,postComment} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      favorites: state.favorites,
      showModal:false
    }
  }

  const mapDispatchToProps = dispatch => ({
    postFavorite: (dishId) => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
})




function RenderDish(props) {

    const dish = props.dish;

        if (dish != null) {
            return(
                <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl+ dish.image}}>
                    <Text style={{margin: 10}}>
                        {dish.description}
                    </Text>
                    <View style={styles.viewStyle}>
                    <Icon

                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log(
                          'Already favorite') : props.onPress()
                        }
                        />
                        <Icon
                            raised
                            reverse
                            name='pencil'
                            type='font-awesome'
                            color='#f50'
                            onPress={() => {props.openCommentModal()}}
                            />
                            </View>
                </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function RenderComments(props) {

    const comments = props.comments;

    const renderCommentItem = ({item, index}) => {

        return (
            <View key={index} style={{margin: 10}}>
                <Text style={{fontSize: 14}}>{item.comment}</Text>
                <Rating
                   style={{ marginTop: 5, marginBottom: 5, alignItems: 'flex-start' }}
                   readonly={true}
                   fractions={0}
                   ratingCount={5}
                   startingValue={item.rating}
                   imageSize={10} />

                <Text style={{fontSize: 12}}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        );
    }

    return (
        <Card title='Comments' >
        <FlatList
            data={comments}
            renderItem={renderCommentItem}
            keyExtractor={item => item.id.toString()}
            />
        </Card>
    );
}
class DishDetail extends React.Component {

    constructor(props)
    {
      super(props)
      this.state=
      {
        favorites: [],
        showModal:false,
        rating: 0,
        author: '',
        comment: '',
      }

    }

    openCommentModal = () => {
     this.setState({ showModal: !this.state.showModal });
    }

    markFavorite(dishId)
    {
      this.props.postFavorite(dishId);
    }

    handleComment(dishId, rating, author, comment) {
       this.props.postComment(dishId, rating, author, comment);
       this.resetForm();
   }


    resetForm() {
       this.setState({
           rating: 5,
           author: '',
           comment: '',
           showModal: false
       })
   }

    static navigationOptions = {
      title : 'Dish Details'
    }

    render()
    {
      const dishId = this.props.navigation.getParam('dishId', '')

      return(
        <ScrollView>
                 <RenderDish dish={this.props.dishes.dishes[+dishId]}
                    favorite={this.props.favorites.some(el => el === dishId)}
                    onPress={() => this.markFavorite(dishId)}
                     openCommentModal={() => this.openCommentModal()}
                     />
                 <RenderComments comments={this.props.comments.comments.filter((comment) => comment.dishId === dishId)} />
                 <Modal animationType={"slide"} transparent={false}
                    visible={this.state.showModal}
                    onDismiss={() => this.openCommentModal()}
                    onRequestClose={() => this.openCommentModal()}>
                    <View style={styles.modal}>
                        <View style={{ marginBottom: 20 }}>
                            <Rating
                                fractions={0}
                                ratingCount={5}
                                showRating={true}
                                startingValue={5}
                                onFinishRating={(value) => this.setState({ rating: value })} />
                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Input
                                placeholder='Author'
                                leftIconContainerStyle={{ marginRight: 6 }}
                                leftIcon={
                                    <Icon
                                        name='user-o'
                                        type='font-awesome'
                                    />
                                }
                                onChangeText={(value) => this.setState({ author: value })}
                            />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Input
                                placeholder='Comment'
                                leftIconContainerStyle={{ marginRight: 6 }}
                                leftIcon={
                                    <Icon
                                        name='comment-o'
                                        type='font-awesome'
                                    />
                                }
                                onChangeText={(value) => this.setState({ comment: value })}
                            />
                        </View>
                        <View style={{ marginBottom: 30 }}>
                            <Button
                                onPress={() => {
                                    this.handleComment(dishId, this.state.rating, this.state.author, this.state.comment);

                                }}
                                color="#512DA8"
                                title="SUBMIT"
                            />
                        </View>
                        <View style={{ marginBottom: 20 }}>
                            <Button
                                onPress={() => { this.openCommentModal() }}
                                color="grey"
                                title="CANCEL"
                            />
                        </View>
                    </View>
                </Modal>
             </ScrollView>

      );
    }

}


const styles = StyleSheet.create({


  viewStyle:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
     justifyContent: 'center',
     margin: 20
  },
  modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      backgroundColor: '#512DA8',
      textAlign: 'center',
      color: 'white',
      marginBottom: 20
  },
  modalText: {
      fontSize: 18,
      margin: 10
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);
