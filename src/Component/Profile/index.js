import React from 'react'
import './style.js'
import { ProfileSkills ,ProfileSection, ProfileTitle, ProfileList, ProfileItem, Span, TitleSpan, SkillsSection, SkillsDesc, Bar, Title, Prec, Parent, ParentSpan, } from './style.js';

const Profile =()=>{
  return(
    <ProfileSkills>
    <div className="container">
        <ProfileSection>
            <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
            <ProfileList>
                <ProfileItem>
                    <Span>Name</Span>
                    Mahmoud Abdelhady
                </ProfileItem>
                <ProfileItem>
                    <Span>Birthday</Span>
                    9/4/1997
                </ProfileItem>
                <ProfileItem>
                    <Span>Address</Span>
                    Beni Sueif
                </ProfileItem>
                <ProfileItem>
                    <Span>Phone</Span>
                    01147861452
                </ProfileItem>
                <ProfileItem>
                    <Span>Email</Span>
                    mabdelhady944@gmail.com
                </ProfileItem>
                <ProfileItem>
                    <Span>Website</Span>
                    <Span web >www.google.com</Span>
                </ProfileItem>
            </ProfileList>
        </ProfileSection>
        
        <SkillsSection>
            <ProfileTitle>Some <TitleSpan>skills</TitleSpan></ProfileTitle>
            <SkillsDesc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
            </SkillsDesc>

            <Bar>
                <Title>JavaScript</Title>
                <Prec>70%</Prec>
                <Parent>
                    <ParentSpan sp4 ></ParentSpan>
                </Parent>
            </Bar>

            <Bar>
                <Title>Bootstrap</Title>
                <Prec>100%</Prec>
                <Parent>
                    <ParentSpan sp1 ></ParentSpan>
                </Parent>
            </Bar>
            <Bar>
                <Title>ReactJs</Title>
                <Prec>70%</Prec>
                <Parent>
                    <ParentSpan sp5 ></ParentSpan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>CSS3</Title>
                <Prec>90%</Prec>
                <Parent>
                    <ParentSpan sp2></ParentSpan>
                </Parent>
            </Bar>
            
            <Bar>
                <Title>Photoshop</Title>
                <Prec>80%</Prec>
                <Parent>
                    <ParentSpan sp3></ParentSpan>
                </Parent>
            </Bar>
        </SkillsSection>
        
        </div>
    </ProfileSkills>
  )
}

export default Profile;