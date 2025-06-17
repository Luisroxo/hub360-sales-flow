
declare global {
  interface Window {
    odoo?: {
      im_livechat?: {
        LivechatButton?: {
          click: () => void;
        };
      };
    };
  }
}

export {};
