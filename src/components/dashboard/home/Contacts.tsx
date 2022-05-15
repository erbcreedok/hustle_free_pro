import { FC, useState, useCallback, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import CardImage from '../../../images/home/contacts_image.svg';
import Divider from '@mui/material/Divider';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useBreakpoint from 'use-breakpoint';

import FacebookIcon from '../../../images/icons/contacts/facebook.svg';
import InstagramIcon from '../../../images/icons/contacts/instagram.svg';
import YoutubeIcon from '../../../images/icons/contacts/youtube.svg';
import VkIcon from '../../../images/icons/contacts/vk.svg';
import WhatsAppIcon from '../../../images/icons/contacts/whatsapp.svg';

const BREAKPOINTS = { mobile: 0, tablet: 769, desktop: 1280 }

type Item = {
  title: string
}[]

type NewsTextProp = {
  title: string;
  text?: string | Item;
}

const data: NewsTextProp[] = [
  {
    title: 'Адрес',
    text: 'ЖК Арай​Жарокова, 137 блок В2 ​цокольный этаж'
  },
  {
    title: 'Почта',
    text: '​info@cheсkmat.kz'
  },
  {
    title: 'Телефон',
    text: '+7‒701‒584‒47‒77'
  },
  {
    title: 'Соц. сети',
    text: [
      { title: 'facebook' },
      { title: 'instagram' },
      { title: 'youtube' },
      { title: 'vk' },
      { title: 'whatsapp' },
    ]
  },
]

type WrapperProp = {
  padding?: string;
}
const Wrapper = styled('div')<WrapperProp>`
  max-width: 674px;
  background: #FFFFFF;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.03);
  border-radius: 10px;
`

const InnerWrapper = styled('div')`
  max-width: 320px;
`
const ImageWrapper = styled('div')`
  width: 79px;
  height: 79px;
  border: 2px solid #F0F4F7;
  margin: 0 14px 24px 0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 0px 30px rgba(0, 0, 0, 0.03));
`
const ContactTopSection = styled('div')`
  display: flex;
  align-items: center;
`
const Image = styled('img')`
  width: 72px;
  height: 23px;
`
const Title = styled('h3')`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  margin: 0 0 14px 0;
`

const BackTextWrapper = styled('div')`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`
const BackText = styled('div')`
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #2F80ED;
`
const ListWrapper = styled('div')`
  margin-bottom: 24px;
`
type TextProps = {
  fontWeight: number;
  fontSize: string;
  lineheight: string;
  color: string;
}
const ListTitle = styled('span')<TextProps>`
  font-weight: ${props => (props.fontWeight)};
  font-size: ${props => (props.fontSize)};
  line-height: ${props => (props.lineheight)};
  color: ${props => (props.color)};
`
const Icon = styled('img')`
  width: 20px;
  height: 20px;
  margin-left: 12px;
`


const Contacts = () => {
  const { breakpoint, maxWidth, minWidth } = useBreakpoint(BREAKPOINTS, 'desktop'); ///// ПЕРЕРЕНДЕР ??????????

  return (
    <>
      <BackTextWrapper>
        <ArrowBackIcon
          sx={{
            width: '20px',
            height: '12px',
            color: '#2F80ED'
          }}
        />
        <BackText>Назад</BackText>
      </BackTextWrapper>

        <Wrapper
          sx={[
             breakpoint === 'mobile' ? { padding: '14px 12px' } : {padding: '16px 15.63px'},
          ]}
        >
        <InnerWrapper>
          <ContactTopSection>
            <ImageWrapper>
              <Image src={CardImage}/>
            </ImageWrapper>
            <Title>CHEСKMAT KAZAKHSTAN</Title>
          </ContactTopSection>
            {
              (data as NewsTextProp[]).map((item, index) => (
                <ListWrapper
                  key={Math.random()}
                  sx={[
                    Array.isArray(item.text) && { display: 'flex', alignItems: 'center' },
                  ]}
                >
                  <ListTitle
                    fontWeight={700}
                    fontSize={'14px'}
                    lineheight={'16px'}
                    color={'#272727'}
                  >{item.title}: </ListTitle>

                  <ListTitle
                    fontWeight={400}
                    fontSize={'14px'}
                    lineheight={'16px'}
                    color={'#848484;'}
                  >
                    {
                      !Array.isArray(item.text) ? item.text
                        :
                        item.text.map((it, i) => (
                          it.title === 'facebook' ? <Icon src={FacebookIcon} />
                            : it.title === 'instagram' ? <Icon src={InstagramIcon} />
                              : it.title === 'youtube' ? <Icon src={YoutubeIcon} />
                                : it.title === 'vk' ? <Icon src={VkIcon} />
                                  : it.title === 'whatsapp' ? <Icon src={WhatsAppIcon} />
                                    : null
                        ))
                    }

                  </ListTitle>
                </ListWrapper>
              ))
            }
        </InnerWrapper>
      </Wrapper>
    </>
  )
}

export default Contacts;