export {};

/** @see index.js.twig */
interface Global {

  user?: {
    id: number;
    timezone: string;
    isAdmin: number;
    display_imperial_units: number;
    display_settings: {
      km_miles_constant: number;
    };
  };
}

declare global {
  interface Window {
    global?: Global;
    analyticsService?: {
      addEvent(collection: string, payload: any);
    };
    CLOSE_MODAL_ON_BG_CLICK?: boolean;
    dataLayer?: {
      push: (data: { [k: string]: any }) => void;
    };
  }
}
