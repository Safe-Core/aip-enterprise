import React, { memo } from 'react';
import { UserSearch } from 'lucide-react';
import { Permissions, PermissionTypes } from 'librechat-data-provider';
import CheckboxButton from '~/components/ui/CheckboxButton';
import { useLocalize, useHasAccess, useSubmitMessage } from '~/hooks';
import { useBadgeRowContext } from '~/Providers';

function WebSearch() {
  const localize = useLocalize();
  const { submitPrompt } = useSubmitMessage();
  const { webSearch: webSearchData, searchApiKeyForm } = useBadgeRowContext();
  const { toggleState: webSearch, debouncedChange, isPinned, authData } = webSearchData;
  const { badgeTriggerRef } = searchApiKeyForm;

  const canUseWebSearch = useHasAccess({
    permissionType: PermissionTypes.WEB_SEARCH,
    permission: Permissions.USE,
  });

  const handleWebSearchClick = () => {
    const text = "Crie um dossiê detalhado sobre [NOME DA PESSOA]";
    if (!text?.trim()) {
      return;
    }
    
    submitPrompt(text);
  };

  if (!canUseWebSearch) {
    return null;
  }

  return (
    (isPinned || (webSearch && authData?.authenticated)) && (
      <CheckboxButton
        ref={badgeTriggerRef}
        className="max-w-fit"
        //checked={webSearch}
        //setValue={debouncedChange}
        label={localize('com_ui_search')}
        isCheckedClassName="border-amber-600/40 bg-amber-500/10 hover:bg-amber-700/10"
        icon={<UserSearch className="icon-md" />}
        onClick={handleWebSearchClick}
      />
    )
  );
}

export default memo(WebSearch);
