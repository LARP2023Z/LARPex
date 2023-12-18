import {
  LaunchEventCommand,
  LaunchResponse,
  GetEventManagementDetailsRequest,
  ManagementEventDetails,
} from "../dataobjects";

export default interface IEventManager {
  launchEvent(command: LaunchEventCommand): Promise<LaunchResponse>;
  getEventManagementDetails(
    command: GetEventManagementDetailsRequest
  ): Promise<ManagementEventDetails>;
}
