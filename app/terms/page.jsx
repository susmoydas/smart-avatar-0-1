import Legal from '@/components/Legal';
export const metadata = { title: 'Terms · SmartAvatar', description: 'Terms for SmartAvatar, in plain language.' };
export default function Terms() {
  return <Legal title="Terms" parts={[
    ['Using this site', 'You’re welcome to browse, play the games and share links. Please don’t try to break or overload the site.'],
    ['Content', 'Text, images and code on this site belong to SmartAvatar unless stated otherwise.'],
    ['No warranty', 'We do our best to keep information correct, but it’s provided as is.'],
    ['Questions', 'Email info@smartavatar.nl.'],
  ]} />;
}
