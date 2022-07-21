import React from 'react';
import MainPage from '../main/main_page.js';
// import PostContainer from '../posts/post_container';
// import PostIndexContainer from '../posts/post_index_container';
import aboutMe from './about_me.js';
import "../../styles/profile.css"
import photoAlbum from './photo-album.js';
import ExperienceForm from '../reviews/review';


class Headers extends React.Component {
  render() {
      const selected = this.props.selectedTab;
      const tabHeaders = this.props.tabs.map((tab, index) => {
      const tabTitle = tab.title;
      const tabIndex = index === selected ? 'active' : '';

      return (
        <li
          key={index}
          className={tabIndex}
          onClick={() => this.props.chosenTab(index)}>
          {tabTitle}{' '}
        </li>
      );
    });
    return (
      <ul className='tabsHeader'>
        {tabHeaders}
      </ul>

    );
 }
}

export default class ProfileNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 0,
    };
    this.selectTab = this.selectTab.bind(this);
  }
 
  componentDidMount(){
        
       
    this.props.fetchUser(this.props.userId)
    // this.props.fetchUsers()
  }
  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render() {

    
    debugger
      console.log("LOOK HERE")
    console.log(this.props.userId)
    //  console.log(this.props.user)
    const tabs = [
        {title: 'About', content: aboutMe(this.props.user)},
        {title: 'My Pictures', content: photoAlbum(this.props.user)},
        {title: 'My Hangout', content: "Snack and Tap"},
        {title: 'My Experience', content: "You're probably wondering how I got here"},
      
    ];
    const tab = tabs[this.state.selectedTab];
   

    return (
      <div>
        <div className='tabs'>
          <Headers 
            selectedTab={this.state.selectedTab}
            chosenTab={this.selectTab}
            tabs={tabs}
            >
          </Headers>
          <div className='tab-content'>
            <div>
              {tab.content}
            </div>
          </div>
        </div>
      </div>
    );
  }
}