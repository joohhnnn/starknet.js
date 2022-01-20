import type { BlockNumber } from '../types';
import { BigNumberish } from '../utils/number';

/**
 * TODO
 * [Reference](https://github.com/starkware-libs/cairo-lang/blob/fc97bdd8322a7df043c87c371634b26c15ed6cee/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py#L148-L153)
 *
 * @param hashValue
 * @param hashField
 */
export function formatHash() {}

/**
 * TODO
 * [Reference](https://github.com/starkware-libs/cairo-lang/blob/fc97bdd8322a7df043c87c371634b26c15ed6cee/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py#L156-L161)
 * @param txHash
 * @param txId
 */
export function txIdentifier() {}

/**
 * Gets the block identifier for API request
 *
 * [Reference](https://github.com/starkware-libs/cairo-lang/blob/fc97bdd8322a7df043c87c371634b26c15ed6cee/src/starkware/starknet/services/api/feeder_gateway/feeder_gateway_client.py#L164-L173)
 *
 * @param blockNumber
 * @param blockHash
 * @returns block identifier for API request
 */
export function getFormattedBlockIdentifier(
  blockHash?: BigNumberish,
  blockNumber: BlockNumber = null
): string {
  if (blockHash) {
    return `?blockHash=${blockHash}`;
  }
  return `?blockNumber=${blockNumber}`;
}