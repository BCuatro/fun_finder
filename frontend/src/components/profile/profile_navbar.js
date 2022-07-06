import React from 'react';
// import PostContainer from '../posts/post_container';
// import PostIndexContainer from '../posts/post_index_container';
import aboutMe from './about_me.js';



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
      selectedTab: 0
    };
    this.selectTab = this.selectTab.bind(this);
  }
 
 
  selectTab(num) {
    this.setState({selectedTab: num});
  }

  render() {
    
    
    const tabs = [
        {title: 'About', content: aboutMe(this.props.user)},
        {title: 'My Pictures', content: 'AWS'},
        {title: 'My Hangout', content: 'Tap and Snack'},
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