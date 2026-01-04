import classes from "@/components/settings/settings.module.css";
import { useAppVersion } from "@/features/workspace/queries/workspace-query.ts";
import { isCloud } from "@/lib/config.ts";
import { Indicator, Text, Tooltip } from "@mantine/core";
import { useTranslation } from "react-i18next";
import semverGt from "semver/functions/gt";

export default function AppVersion() {
  const { t } = useTranslation();
  const { data: appVersion } = useAppVersion(!isCloud());
  let hasUpdate = false;
  try {
    hasUpdate =
      appVersion &&
      parseFloat(appVersion.latestVersion) > 0 &&
      semverGt(appVersion.latestVersion, appVersion.currentVersion);
  } catch (err) {
    console.error(err);
  }

  return (
    <div className={classes.text}>
      <Tooltip
        label={t("{{latestVersion}} is available", {
          latestVersion: `v${appVersion?.latestVersion}`,
        })}
        disabled={!hasUpdate}
      >
        <Indicator
          label={t("New update")}
          color="gray"
          inline
          size={16}
          position="middle-end"
          style={{ cursor: "pointer" }}
          disabled={!hasUpdate}
          onClick={() => {
            window.open(
              "https://github.com/vito0912/forkmost/releases",
              "_blank",
            );
          }}
        >
          <Text
            size="sm"
            c="dimmed"
            component="a"
            mr={45}
            href="https://github.com/vito0912/forkmost/releases"
            target="_blank"
          >
            v{APP_VERSION} - myIRIS Docs
          </Text>
        </Indicator>
      </Tooltip>
    </div>
  );
}
