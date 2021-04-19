import { frontendURL } from '../helper/URLHelper';

export const getSidebarItems = accountId => ({
  common: {
    routes: [
      'home',
      'inbox_dashboard',
      'inbox_conversation',
      'conversation_through_inbox',
      'contacts_dashboard',
      'notifications_dashboard',
      'settings_account_reports',
      'profile_settings',
      'profile_settings_index',
      'label_conversations',
      'conversations_through_label',
      'team_conversations',
      'conversations_through_team',
      'notifications_index',
    ],
    menuItems: {
      assignedToMe: {
        icon: 'message-square',
        label: 'CONVERSATIONS',
        hasSubMenu: false,
        key: '',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
        toolTip: 'Conversation from all subscribed inboxes',
        toStateName: 'home',
      },
      contacts: {
        icon: 'book',
        label: 'CONTACTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/contacts`),
        toStateName: 'contacts_dashboard',
      },
      notifications: {
        icon: 'bell',
        label: 'NOTIFICATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/notifications`),
        toStateName: 'notifications_dashboard',
      },
      report: {
        icon: 'trending-up',
        label: 'REPORTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/reports`),
        toStateName: 'settings_account_reports',
      },
      settings: {
        icon: 'settings',
        label: 'SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings`),
        toStateName: 'settings_home',
      },
    },
  },
  settings: {
    routes: [
      'agent_list',
      'canned_list',
      'labels_list',
      'settings_inbox',
      'settings_inbox_new',
      'settings_inbox_list',
      'settings_inbox_show',
      'settings_inboxes_page_channel',
      'settings_inboxes_add_agents',
      'settings_inbox_finish',
      'settings_integrations',
      'settings_integrations_webhook',
      'settings_integrations_integration',
      'general_settings',
      'general_settings_index',
      'settings_teams_list',
      'settings_teams_new',
      'settings_teams_add_agents',
      'settings_teams_finish',
      'settings_teams_edit',
      'settings_teams_edit_members',
      'settings_teams_edit_finish',
    ],
    menuItems: {
      back: {
        icon: 'chevrons-left',
        label: 'HOME',
        hasSubMenu: false,
        toStateName: 'home',
        toState: frontendURL(`accounts/${accountId}/dashboard`),
      },
      agents: {
        icon: 'headphones',
        label: 'AGENTS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/agents/list`),
        toStateName: 'agent_list',
      },
      teams: {
        icon: 'users',
        label: 'TEAMS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/teams/list`),
        toStateName: 'settings_teams_list',
      },
      inboxes: {
        icon: 'inbox',
        label: 'INBOXES',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/inboxes/list`),
        toStateName: 'settings_inbox_list',
      },
      labels: {
        icon: 'tag',
        label: 'LABELS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/labels/list`),
        toStateName: 'labels_list',
      },
      cannedResponses: {
        icon: 'message-square',
        label: 'CANNED_RESPONSES',
        hasSubMenu: false,
        toState: frontendURL(
          `accounts/${accountId}/settings/canned-response/list`
        ),
        toStateName: 'canned_list',
      },
      settings_integrations: {
        icon: 'zap',
        label: 'INTEGRATIONS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/integrations`),
        toStateName: 'settings_integrations',
      },
      general_settings_index: {
        icon: 'settings',
        label: 'ACCOUNT_SETTINGS',
        hasSubMenu: false,
        toState: frontendURL(`accounts/${accountId}/settings/general`),
        toStateName: 'general_settings_index',
      },
    },
  },
});
