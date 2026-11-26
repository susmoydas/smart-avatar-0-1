import Legal from '@/components/Legal';
export const metadata = { title: 'Privacy · SmartAvatar', description: 'Privacy for SmartAvatar, in plain language.' };
export default function Privacy() {
  return <Legal title="Privacy" parts={[
    ['What we collect', 'This website doesn’t use tracking cookies or analytics. It only stores small things in your own browser, like your game high scores.'],
    ['Contact', 'The contact chat opens your own email app. We only see what you choose to send us.'],
    ['Your rights', 'You can ask what data we hold about you, and ask us to correct or delete it, under the GDPR.'],
    ['Who we are', 'SmartAvatar B.V., Delft, the Netherlands.'],
  ]} />;
}
