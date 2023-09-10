# actual-wise
This is an app to pull transactions frow the Wise API and write them into an [Actual Budget](https://github.com/actualbudget/actual) instance. It is intended to run in a Docker container, with the following environment variables:
<table class="tg">
<thead>
  <tr>
    <th class="tg-1wig">name</th>
    <th class="tg-1wig">value</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">SYNC_ID</td>
    <td class="tg-0lax">Sync ID from your Actual server (Setting <span style="font-weight:400;font-style:italic;text-decoration:none">→</span> Show advanced settings <span style="font-weight:400;font-style:italic;text-decoration:none">→</span> Sync ID).</td>
  </tr>
  <tr>
    <td class="tg-0lax">SERVER_URL</td>
    <td class="tg-0lax">URL of your running server.</td>
  </tr>
  <tr>
    <td class="tg-0lax">PASSWORD</td>
    <td class="tg-0lax">Password to log into the server.</td>
  </tr>
  <tr>
    <td class="tg-0lax">WISE_API_KEY</td>
    <td class="tg-0lax">API key for your Wise account (Settings <span style="font-style:italic">→ </span>API Tokens). I recommend creating one with read-only permissions.</td>
  </tr>
</tbody>
</table>