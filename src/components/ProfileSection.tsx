import { Card } from "./ui/card";

export default function ProfileSection ({activeProfile, availableProfiles}: {activeProfile: null | any, availableProfiles: any[]}) {

    const profileList = availableProfiles?.map((profile) => <h1 key={profile.name}>{profile.name}</h1>)

    return(
        <div>
            {activeProfile ? <Card>hello world</Card> : profileList}
        </div>

    )
}