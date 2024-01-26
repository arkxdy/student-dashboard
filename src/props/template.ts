import { types } from "util"

export interface navObject{
    name:string,
    href:string,
    current:boolean
}

export type githubProfile = {
    login:string,
    id:number,
    node_id:string,
    avatar_url:string,
    gavatar_id:string,
    url:string,
    html_url:string,
    followers_url:string,
    following_url:string,
    gists_url:string,
    starred_url:string,
    subscriptions_url:string,
    organizations_url:string,
    repos_url:string,
    events_url:string,
    received_events_url:string,
    type:string,
    site_admin:string,
    name:string,
    company:string | null,
    blog:string,
    location:string | null,
    email:string | null,
    hireable:string | null,
    bio:string | null,
    twitter_username:string | null,
    public_repos:string,
    public_gists:string,
    followers:string,
    following:string,
    created_at:string,
    updated_at:string,
    message:string,
    documentation_url:string
}

export interface githubDashboard{
    login:string,
    id:number,
    node_id:string,
    avatar_url:string,
    gravatar_id:string,
    repos_url:string,
    html_url:string,
    events_url:string,
    type:string,
    site_admin:boolean
    }