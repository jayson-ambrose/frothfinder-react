import ProfileSelectCard from "./ProfileSelectCard"

export default function ProfileSection ({activeProfile, availableProfiles}: {activeProfile: null | any, availableProfiles: any[]}) {

    const profileList = availableProfiles?.map((profile) => <h1 key={profile.name}>{profile.name}</h1>)

    return(
        <div>
            {activeProfile ? <ProfileSelectCard/>: profileList}
        </div>

    )
}