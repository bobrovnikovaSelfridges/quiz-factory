// import * as Yup from 'yup';
// import { MembershipSchema } from 'types';

// const selectedAnswersSchema = (): MembershipSchema => {
//   return {
//     title: 'Contact preferences',
//     properties: {
//       consent: [
//         {
//           id: 'sso',
//           label: 'Sales and special offers',
//           description: 'You’ll be the first to know about our extraordinary sales, promotions, special offers and more.'
//         },
//         {
//           id: 'productLaunches',
//           label: 'Product launches and inspiring content',
//           description: 'You’ll receive the latest news from Selfridges, including our most exciting product launches and stories to brighten your day.'
//         },
//         {
//           id: 'personalRecommentations',
//           label: 'Personal recommendations',
//           description: 'Receive personal product recommendations and edits from our experts.'

//         },
//         {
//           id: 'exclusiveInvitations',
//           label: 'Exclusive invitations',
//           description: 'Receive invitations to a series of exclusive events and experiences.'
//         }
//       ],
//       communications: [
//         {
//           id: 'email',
//           label: 'Email'
//         },
//         {
//           id: 'social',
//           label: 'Social Messaging',
//           description: 'This allows us to contact you via social channels like WhatsApp Messenger, WeChat, Instagram and more.'
//         },
//         {
//           id: 'sms',
//           label: 'Text'
//         },
//         {
//           id: 'telephone',
//           label: 'Telephone'
//         },
//         {
//           id: 'post',
//           label: 'Post'
//         }
//       ]
//     },
//     validation: Yup.object().shape({
//       consent: Yup.array().when('communications', {
//         is: (comms: any[]) => comms?.length > 0,
//         then: Yup.array().min(1).of(Yup.string().required()).required()
//       }),
//       communications: Yup.array().when('consent', {
//         is: (consent: any[]) => consent?.length > 0,
//         then: Yup.array().min(1).of(Yup.string().required()).required()
//       })
//     }, [['consent', 'communications']])
//   };
// };

// export default membershipSchema;
