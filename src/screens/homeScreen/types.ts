export interface EventDataType {
  id: string;
  type: string;
  actor: ActorDataType;
  repo: RepoDataType;
  payload: EventPayloadDataType;
  public: boolean;
  created_at: string;
  org: EventOrgDataType;
}

export interface ActorDataType {
  id: number;
  login: string;
  display_login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}
export interface RepoDataType {
  id: number;
  name: string;
  url: string;
}

export interface EventPayloadDataType {
  action: string;
  issue: EventPayloadIssueType;
}

export interface EventPayloadIssueType {
  url: string;
  repository_url: string;
  labels_url: string;
  comments_url: string;
  events_url: string;
  html_url: string;
  id: number;
  node_id: string;
  number: number;
  title: string;
  user: EventPayloadUserDataType;
  labels: EventPayloadLabelsData[];
  state: string;
  locked: boolean;
  assignee?: unknown;
  assignees?: unknown[] | unknown;
  milestone?: unknown;
  comments: number;
  created_at: string;
  updated_at: string;
  closed_at?: unknown;
  author_association: string;
  active_lock_reason?: unknown;
  body: string;
  performed_via_github_app?: unknown;
}

export interface EventPayloadUserDataType {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface EventPayloadLabelsData {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string;
}

export interface EventOrgDataType {
  id: number;
  login: string;
  gravatar_id: string;
  url: string;
  avatar_url: string;
}
